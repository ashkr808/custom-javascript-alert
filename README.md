# custom-javascript-alert
Get rid of your generic "confirm" and "alert" javascript function, be more UI friendly with your visitors.

# Demo
![](https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png | width=100)

# Instructions
1. link "dist/custom-alert.css" css file to the document.
2. import "CustomAlert" class from "dist/custom-alert.js".
```javascript
    import {CustomAlert} from './dist/custom-alert.js';
 ```
3. instanciate an object with "CustomAlert" class.
4. you ae good to go !

# alert method
```javascript
  import {CustomAlert} from './dist/custom-alert.js';
  const obj = new CustomAlert;
  obj.alert(str,boolean,time);
 ```
  - str : (string) message you want to alert
  - boolean :(boolean) you want 'OK' button or not in the alert [OPTIONAL : dwafult : false]
  - time : (int) time in ms, for how long the alert will appear. [OPTIONAL: deafult : 3000]

# confirm method
```javascript
  import {CustomAlert} from './dist/custom-alert.js';
  const obj = new CustomAlert;
  obj.confirm(str,callback1,callback2);
  ```
  - str : (string) message you want to confirm
  - callback1 : this callback will be exeuted after "Yes" (confirm) action.
  - callback2 : this callback will be exeuted after "No" (not confirm) action. [OPTIONAL: deafult : return]
  
# Example
   - check "sample/sample.html" for working example.
   ```javascript
       import {CustomAlert} from './dist/custom-alert.js';
       const obj = new CustomAlert;
       obj.alert("This is alert message !!",true,4000);
       obj.confirm("Are you sure that you want to delete ?",()=>{ console.log('deleted')} ,()=>{ console.log('not deleted')} );
   ```

# Make it yours
 - make chamges in "custom-alert.css" file to  edit the UI of alert box.
 - chanage colors of UI elements.
 - Warning :  do not play with any transform property.
