/**
 * @fileoverview Rule to flag use of console object
 * @author Nicholas C. Zakas
 */

'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const astUtils = require('../ast-utils');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      // 定义该规则描述
      description: 'disallow the use of `console`',
      // 定义该规则的类别
      category: 'Possible Errors',
      // 是否作为ESLint的推荐项目
      recommended: true
    },
    // 用来定义模式的参数
    // no-console: ["error", { allow: ["warn", "error"] }] */
    schema: [
      {
        type: 'object',
        properties: {
          allow: {
            type: 'array',
            items: {
              type: 'string'
            },
            minItems: 1,
            uniqueItems: true
          }
        },
        additionalProperties: false
      }
    ]
  },
  // rule创建函数
  create(context) {
    // context 为ESLint 遍历js代码时候的节点对象，里面包含了一些属性，方法  其中最统一理解和常用的：report方法
    const options = context.options[0] || {};
    const allowed = options.allow || [];

    /**
     * Checks whether the given reference is 'console' or not.
     *
     * @param {escope.Reference} reference - The reference to check.
     * @returns {boolean} `true` if the reference is 'console'.
     */
    //  检查给的因引用是否有 console
    function isConsole(reference) {
      const id = reference.identifier;

      return id && id.name === 'console';
    }

    /**
     * Checks whether the property name of the given MemberExpression node
     * is allowed by options or not.
     *
     * @param {ASTNode} node - The MemberExpression node to check.
     * @returns {boolean} `true` if the property name of the node is allowed.
     */
    // 检查给的成员表达式节点的属性名称是否被允许
    function isAllowed(node) {
      const propertyName = astUtils.getStaticPropertyName(node);

      return propertyName && allowed.indexOf(propertyName) !== -1;
    }

    /**
     * Checks whether the given reference is a member access which is not
     * allowed by options or not.
     *
     * @param {escope.Reference} reference - The reference to check.
     * @returns {boolean} `true` if the reference is a member access which
     *      is not allowed by options.
     */
    // 检查给的引用是否为一个不可访问的成员。。。（难理解）
    function isMemberAccessExceptAllowed(reference) {
      const node = reference.identifier;
      const parent = node.parent;

      return (
        parent.type === 'MemberExpression' &&
        parent.object === node &&
        !isAllowed(parent)
      );
    }

    /**
     * Reports the given reference as a violation.
     *
     * @param {escope.Reference} reference - The reference to report.
     * @returns {void}
     */
    // 报告消息
    function report(reference) {
      const node = reference.identifier.parent;

      context.report({
        node,
        loc: node.loc,
        message: 'Unexpected console statement.'
      });
    }

    // 抛出事件钩子？ 但是并没有找到钩子的文档，还是每一个rule钩子需要自己定义？
    return {
      'Program:exit'() {
        const scope = context.getScope();
        const consoleVar = astUtils.getVariableByName(scope, 'console');
        const shadowed = consoleVar && consoleVar.defs.length > 0;

        /* 'scope.through' includes all references to undefined
         * variables. If the variable 'console' is not defined, it uses
         * 'scope.through'.
         */
        const references = consoleVar
          ? consoleVar.references
          : scope.through.filter(isConsole);

        if (!shadowed) {
          references.filter(isMemberAccessExceptAllowed).forEach(report);
        }
      }
    };
  }
};