namespace("Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation").Menu=function(){this.FolderId=0},angular.module("Cerberus.Tool.TemplateEngine").controller("Cerberus.Tool.TemplateEngine.Controller.ControlPlugin.Navigation.Menu",["$scope","$injector","$timeout",function(a,b){var c=new Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.Menu;require(["/Module/CMS/Service/Article.js"],function(){a.ArticleService=b.get("Cerberus.Module.CMS.Service.Article"),a.$watch("TemplateControl.Content",function(){a.ControlData=JSON.tryParse(a.TemplateControl.Content,c),a.MenuItems=a.ArticleService?a.ArticleService.GetArticles(a.ControlData.FolderId,{Publication:1,OrderBy:0}):[]}),a.$digest()})}]);