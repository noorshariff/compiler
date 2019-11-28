import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { MonacoEditorComponent } from './monaco-editor/monaco-editor.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// export function onMonacoLoad() {
 
//   console.log((window as any).monaco);
 
//   const uri = monaco.Uri.parse('a://b/foo.json');
//   monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
//     validate: true,
//     schemas: [{
//       uri: 'http://myserver/foo-schema.json',
//       fileMatch: [uri.toString()],
//       schema: {
//         type: 'object',
//         properties: {
//           p1: {
//             enum: ['v1', 'v2']
//           },
//           p2: {
//             $ref: 'http://myserver/bar-schema.json'
//           }
//         }
//       }
//     }, {
//       uri: 'http://myserver/bar-schema.json',
//       fileMatch: [uri.toString()],
//       schema: {
//         type: 'object',
//         properties: {
//           q1: {
//             enum: ['x1', 'x2']
//           }
//         }
//       }
//     }]
//   });
 
// }


// const monacoConfig: NgxMonacoEditorConfig = {
//   baseUrl: 'assets',
//   defaultOptions: { scrollBeyondLastLine: false },
//   onMonacoLoad : () => { console.log((<any>window).monaco); } 
// };

@NgModule({
  declarations: [
    AppComponent,
    MonacoEditorComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule,
    AngularEditorModule,
    MonacoEditorModule.forRoot(),
    RouterModule.forRoot([]),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
