this["hbs"] = this["hbs"] || {};

this["hbs"]["testList"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <li class=\"test-list-item\">"
    + container.escapeExpression(((helper = (helper = helpers.testListItem || (depth0 != null ? depth0.testListItem : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"testListItem","hash":{},"data":data}) : helper)))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"test-list-wrapper\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.testList : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});