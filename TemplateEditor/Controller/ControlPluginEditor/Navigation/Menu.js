define(["../../../App.js","/Module/CMS/Service/Folder.js"],function(a){var b="Cerberus.Tool.TemplateEditor.Controller.ControlPluginEditor.Navigation.Menu";return a.controller(b,["$scope","$injector","Cerberus.Tool.TemplateEditor.Localization",function(a,b,c){a.Localization=c,a.ControlData=JSON.tryParse(a.SelectedTemplateControl.Content,new Cerberus.Tool.TemplateEngine.Model.ControlPlugin.Navigation.Menu),a.FolderService=b.get("Cerberus.Module.CMS.Service.Folder"),a.Folders=a.FolderService.GetFolders(0),a.$watch("ControlData",function(){a.SelectedTemplateControl.Content=JSON.stringify({FolderId:~~a.ControlData.FolderId})},!0)}]),b});