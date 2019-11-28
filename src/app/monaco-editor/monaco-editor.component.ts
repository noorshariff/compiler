import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.css']
})
export class MonacoEditorComponent implements OnInit {
 editorOptions = {
  theme: 'vs-light', 
  language: 'javascript'
  
  };
  

  code: string = 'function x() {\nconsole.log("Hello world!");\n}';
  originalCode: string = 'function x() { // TODO }';
  constructor( private http: HttpClient) {}

  ngOnInit() {
}
  
  onInit(editor) {
    let line = editor.getPosition();
    console.log(line);
  }
}
