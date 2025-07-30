1.使用 vscode 打开 PalSrcipt 工作区目录进行编辑（可以将文件夹拖进去）。
2.在 vscode 配置文件增加以下内容：

    "[javascript]": {
      "editor.tabSize": 3,  // 修改为你想要的 tab 大小
      "files.encoding": "gbk",
      "javascript.suggest.enabled": false,
      "javascript.suggest.completeJSDocs": false,
      "javascript.suggest.names": false,
      "javascript.suggest.completeFunctionCalls": false,
      "javascript.suggestionActions.enabled": false,
      "editor.showDeprecated": false,
      "editor.snippetSuggestions": "none",
      "editor.suggest.showConstants": false,
      "editor.suggest.showConstructors": false,
      "editor.suggest.showFields": false,
      "editor.suggest.showFunctions": false,
      "editor.suggest.showKeywords": false,
      "editor.suggest.showMethods": false,
      "editor.suggest.showOperators": false,
      "editor.suggest.showInterfaces": false,
      "editor.suggest.showEnums": false,
      "editor.suggest.showProperties": false,
      "editor.suggest.showClasses": false,
      "editor.suggest.showColors": false,
      // "editor.suggest.showValues": false,
      // "editor.suggest.showWords": false,
      // "editor.suggest.filterGraceful": false
    },