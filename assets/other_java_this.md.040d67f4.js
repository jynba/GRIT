import{_ as a,o,c as n,z as e,a as t}from"./chunks/framework.a16bd534.js";const v=JSON.parse('{"title":"关于java函数方法中把值带出去的问题","description":"","frontmatter":{"title":"关于java函数方法中把值带出去的问题","date":"2021-9-1","tags":["java_tips","made_by_jy"],"categories":["java"]},"headers":[],"relativePath":"other/java/this.md","lastUpdated":1694245341000}'),l={name:"other/java/this.md"},s=e("ul",null,[e("li",null,[t("在 C 语言中，我们通过"),e("strong",null,"指针"),t("来实现将函数中的值带出去，实现在函数方法中修改外面的值。"),e("strong",null,"而在 java 中没有指针，Java 在处理基本数据类型（例如 int、char、double 等）时，都是采用按值传递（传递的是输入参数的复制）的方式执行，除此之外的其他类型都是按引用传递（传递的是对象的一个引用）的方式执行。"),t(" 因此，如果在 java 中如果要需在方法内修改类中的值：")]),e("li",{"d1.temp":"20;"},"第一种方法是：把类传进方法来，再通过类调用值进行修改。如：fun(Demo d1)"),e("li",null,[t("第二种方法是：通过在方法内使用 this.temp=20;直接修改类中的值。"),e("br"),t(" 而这两种方法其实都是通过传入类实例的引用来对类中的属性进行修改。而在这里加一下 clone()的用处。如果要实现复制一个类，我们可能会直接 Demo d2 = new Demo(); d2=d1;而这样做的后果呢，会导致我们需引用 d2 修改时，d1 也同样被修改。**因为我们此时的=只是对于 d1 的引用传递。**但是通过 clone()则能实现对 Demo()的复制。clone()使用时需要调用接口 Cloneable，且需要在子类对 Object clone()方法进行覆写 return super.clone()。然后在 main 中调用时，向下将返回的 Object.clone()向下转型。")])],-1),r=e("hr",null,null,-1),c=[s,r];function d(i,_,u,m,p,h){return o(),n("div",null,c)}const f=a(l,[["render",d]]);export{v as __pageData,f as default};
