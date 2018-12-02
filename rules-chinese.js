
var rules={
  
    // allow debugger during development
    // 禁止使用debugger（无调试器）
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    
    // disallow unnecessary parentheses
    // 不允许使用不必要的括号（没有额外的parens）
    'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
    
    // disallow negating the left operand of relational operators
    // 不允许否定关系运算符的左操作数（无不安全否定）
    'no-unsafe-negation': 'error',
    
    // enforce valid JSDoc comments
    // 强制执行有效的JSDoc注释（valid-jsdoc）
    'valid-jsdoc': 'off',
    
    /*
     * Best Practices
     */
    
    // enforce return statements in callbacks of array methods
    // 在数组方法的回调中实现返回语句（array-callback-return）
    'array-callback-return': 'error',
    
    // enforce consistent brace style for all control statements
    // 要求遵循以下约束（花括号不能被省略）
    curly: ['error', 'multi-line'],
    
    // enforce consistent newlines before and after dots
    // 点（dot-location）之前和之后强制换行
    'dot-location': ['error', 'property'],
    
    // enforce dot notation whenever possible
    // 要求点符号（点符号）
    'dot-notation': 'error',
    
    // require the use of === and !==
    // 要求===和！==（eqeqeq）
    eqeqeq: ['error', 'smart'],

    // disallow the use of arguments.caller or arguments.callee
    // 禁止使用主叫方/被叫方（无主叫方）
    'no-caller': 'error',

    // disallow empty functions
    // 禁止空函数（无空函数）
    //'no-empty-function': 'error',

    // disallow unnecessary calls to .bind()
    // 禁止不必要的函数绑定（无额外绑定）
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    // 不允许使用不需要的标签（无额外标签）
    'no-extra-label': 'error',

    // disallow leading or trailing decimal points in numeric literals
    // 禁止浮动小数（无浮动十进制）
    'no-floating-decimal': 'error',

    // disallow assignments to native objects or read-only global variables
    // 禁止分配给本地对象或只读全局变量（no-global-assign）
    'no-global-assign': 'error',

    // disallow the use of eval()-like methods
    // 不允许暗示eval（）（不隐含评估）
    'no-implied-eval': 'error',

    // disallow the use of the __iterator__ property
    // 禁止迭代器（无迭代器）
    'no-iterator': 'error',

    // disallow unnecessary nested blocks
    // 不允许不必要的嵌套块（无单块）
    'no-lone-blocks': 'error',

    // disallow multiple spaces
    // 禁止多个空格（无多空格）
    'no-multi-spaces': 'error',

    // disallow new operators with the String, Number, and Boolean objects
    // 禁止基元包装实例（无新包装）
    'no-new-wrappers': 'error',

    // disallow octal escape sequences in string literals
    // 禁止字符串文字中的八进制转义序列（no-octal-escape）
    'no-octal-escape': 'error',

    // disallow the use of the __proto__ property
    // 禁止使用__proto__（no-proto）
    'no-proto': 'error',

    // disallow comparisons where both sides are exactly the same
    // 禁止自我比较（无自我比较）
    'no-self-compare': 'error',

    // disallow throwing literals as exceptions
    // 限制可以作为异常抛出的内容（无文字）
    'no-throw-literal': 'error',

    // disallow unused expressions
    // 禁止未使用的表达式（不使用未使用的表达式）
    'no-unused-expressions': 'error',

    // disallow unnecessary calls to .call() and .apply()
    // 禁止不必要的.call()和.apply()。（没有无用的呼叫）
    'no-useless-call': 'error',

    // disallow unnecessary concatenation of literals or template literals
    // 不允许不必要的字符串串联（no-useless-concat）
    'no-useless-concat': 'error',

    // disallow unnecessary escape characters
    // 禁止不必要的转义使用（无用的转义）
    'no-useless-escape': 'error',

    // disallow void operators
    // 禁止使用void运算符。（无空隙）
    'no-void': 'error',

    // require parentheses around immediate function invocations
    // 要求包裹IIFE（包裹生命）
    'wrap-iife': 'error',

    // require or disallow “Yoda” conditions
    // 要求或禁止Yoda条件（yoda）
    yoda: 'error',

    /*
     * Variables
     */

    // disallow labels that share a name with a variable
    // 禁止变量名称的标签（no-label-var）
    'no-label-var': 'error',

    // disallow initializing variables to undefined
    // 禁止初始化为undefined（no-undef-init）
    'no-undef-init': 'error',
    // 禁止未声明的变量（no-undef）
    'no-undef': 'off',
    // disallow the use of variables before they are defined
    // 禁止早期使用（定义之前不使用）
    'no-use-before-define': 'error',

    /*
     * Node.js and CommonJS
     */

    // disallow new operators with calls to require
    // 禁止新的要求（无新要求）
    'no-new-require': 'error',

    /*
     * Stylistic Issues
     */

    // enforce consistent spacing inside array brackets
    // 禁止或强制使用括号内的空格（array-bracket-spacing）
    'array-bracket-spacing': 'error',

    // enforce consistent spacing inside single-line blocks
    // 禁止或强制打开块之后和关闭块之前的块内部空间（块间距）
    'block-spacing': 'error',

    // enforce consistent brace style for blocks
    // 要求Brace Style（大括号）
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require or disallow trailing commas
    // 需要或不允许尾随逗号（逗号）
    'comma-dangle': 'error',

    // enforce consistent spacing before and after commas
    // 强制逗号间隔（逗号间距）
    'comma-spacing': 'error',

    // enforce consistent comma style
    // 逗号样式（逗号式）
    'comma-style': 'error',

    // enforce consistent spacing inside computed property brackets
    // 禁止或强制执行计算属性内的空间（computed-property-spacing）
    'computed-property-spacing': 'error',

    // require or disallow spacing between function identifiers and their invocations
    // 要求或不允许函数标识符与其调用之间的间隔（func-call-spacing）
    'func-call-spacing': 'error',

    // enforce consistent indentation
    // 强制执行一致的缩进（缩进）
    indent: ['error', 2, { SwitchCase: 1 }],

    // enforce the consistent use of either double or single quotes in JSX attributes
    // 在JSX属性中强制使用双引号或单引号（jsx-quotes）
    'jsx-quotes': 'error',

    // enforce consistent spacing between keys and values in object literal properties
    // 在对象字面量属性中实现键和值之间的一致间隔（键间距）
    'key-spacing': 'error',

    // enforce consistent spacing before and after keywords
    // 在关键字之前和之后执行一致的间距（keyword-spacing）
    'keyword-spacing': 'error',

    // enforce consistent linebreak style
    // 强制执行一致的换行样式（换行样式）
    //'linebreak-style': 'error',

    // require or disallow newlines around directives
    // 要求或不允许围绕指令换行符（指令周围）
    'lines-around-directive': 'error',

    // require constructor names to begin with a capital letter
    // 要求构造函数名以大写字母（新帽）开头，
    'new-cap': 'off',

    // require parentheses when invoking a constructor with no arguments
    // 调用一个没有参数的构造函数时需要括号（new-parens）
    'new-parens': 'error',

    // disallow Array constructors
    // 禁止Array构造函数（无数组构造函数）
    'no-array-constructor': 'error',

    // disallow Object constructors
    // 禁止Object构造函数（无新对象）
    'no-new-object': 'error',

    // disallow trailing whitespace at the end of lines
    // 不允许在行尾添加尾随空格（无尾空格）
    'no-trailing-spaces': 'error',

    // disallow ternary operators when simpler alternatives exist
    // 当存在更简单的选择时不允许三元运算符（不需要 - 三元）
    'no-unneeded-ternary': 'error',

    // disallow whitespace before properties
    // 在属性之前禁止使用空格（no-whitespace-before-property）
    'no-whitespace-before-property': 'error',

    // enforce consistent spacing inside braces
    // 在大括号内强制执行一致的间距（object-curly-spacing）
    //'object-curly-spacing': ['error', 'always'],

    // require or disallow padding within blocks
    // 要求或不允许块内的填充（填充块）
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    // 需要引用对象字面值属性名称（quote-props）
    'quote-props': ['error', 'as-needed'],

    // enforce the consistent use of either backticks, double, or single quotes
    // 强制一致使用反引号，双引号或单引号（引号）
    quotes: ['error', 'single'],

    // enforce consistent spacing before and after semicolons
    // 分号前后间隔（半间距）
    'semi-spacing': 'error',

    // require or disallow semicolons instead of ASI
    // 需要或不允许使用分号代替ASI（半）
    // semi: ['error', 'never'],

    // enforce consistent spacing before blocks
    // 在块之前需要或不允许空间（块之前空间）
    'space-before-blocks': 'error',
    // 禁止使用console（无控制台）
    'no-console': 'off',

    // enforce consistent spacing before function definition opening parenthesis
    // 在函数括号之前需要或不允许使用空格（space-before-function-paren）
    'space-before-function-paren': ['error', 'never'],

    // enforce consistent spacing inside parentheses
    // 禁止或强制执行括号内的空格（空格键）
    'space-in-parens': 'error',

    // require spacing around infix operators
    // 需要中缀运算符间隔（space-infix-ops）
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    // 在一元运算符（空间一元运算符）之前/之后需要或不允许空格
    'space-unary-ops': 'error',

    // enforce consistent spacing after the // or /* in a comment
    // 要求或不允许开始评论的空格（空格或制表符）（空格或标签）
    'spaced-comment': 'error',

    // require or disallow Unicode byte order mark (BOM)
    // 要求或不允许Unicode字节顺序标记（BOM）（unicode-bom）
    'unicode-bom': 'error',

    /*
     * ECMAScript 6
     */

    // require braces around arrow function bodies
    // 在箭头函数体中需要大括号（箭头体风格）
    'arrow-body-style': 'error',

    // require parentheses around arrow function arguments
    // 在箭头函数参数中需要parens（arrow-parens）
    'arrow-parens': ['error', 'as-needed'],

    // enforce consistent spacing before and after the arrow in arrow functions
    // 在箭头函数中的箭头之前和之后强制执行一致的间距
    'arrow-spacing': 'error',

    // enforce consistent spacing around * operators in generator functions
    // 在生成器函数中强制执行*操作符间的一致间距
    'generator-star-spacing': ['error', 'after'],

    // disallow duplicate module imports
    // 禁止重复模块导入
    'no-duplicate-imports': 'error',

    // disallow unnecessary computed property keys in object literals
    // 禁止在对象文字中使用不必要的计算属性键
    'no-useless-computed-key': 'error',

    // disallow unnecessary constructors
    // 禁止不必要的构造函数
    'no-useless-constructor': 'error',

    // disallow renaming import, export, and destructured assignments to the same name
    // 不允许将导入，导出和解构分配重命名为相同的名称
    'no-useless-rename': 'error',

    // require let or const instead of var
    // 需要let或const而不是var
    'no-var': 'error',

    // require or disallow method and property shorthand syntax for object literals
    // 必须使用简写，但是生命周期中vue 建议不用简写
    // 'object-shorthand': 'error',

    // require arrow functions as callbacks
    // 需要箭头函数作为回调
    'prefer-arrow-callback': 'error',

    // require const declarations for variables that are never reassigned after declared
    // 需要对声明后永远不会重新赋值的变量使用常量声明
    'prefer-const': 'error',

    // disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // 不允许parseInt（）支持二进制，八进制和十六进制文字
    'prefer-numeric-literals': 'error',

    // require rest parameters instead of arguments
    // 需要休息参数而不是参数
    'prefer-rest-params': 'error',

    // require spread operators instead of .apply()
    // 需要扩展运算符而不是.apply（）
    'prefer-spread': 'error',

    // enforce spacing between rest and spread operators and their expressions
    // 强制休息和传播运算符及其表达式之间的间隔
    'rest-spread-spacing': 'error',

    // require or disallow spacing around embedded expressions of template strings
    // 要求或不允许围绕嵌入的模板字符串表达式进行间距
    'template-curly-spacing': 'error',

    // require or disallow spacing around the * in yield* expressions
    // *在yield *表达式中需要或不允许间距*
    'yield-star-spacing': 'error',
    // 需要或不允许使用分号代替ASI（半）
    semi: [2, 'always'] // 语句强制分号结尾
  }