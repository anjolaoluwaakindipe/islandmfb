/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first page.
*/

import { svelteNativeNoFrame } from 'svelte-native'
import App from './App.svelte';
import { registerNativeViewElement } from "svelte-native/dom";
import {install} from '@nativescript-community/ui-drawer';
import DrawerElement from "@nativescript-community/ui-drawer/svelte";

registerNativeViewElement(
  "checkBox",
  () => require("@nstudio/nativescript-checkbox").CheckBox
);

registerNativeViewElement(
  "svgView",
  () => require("@nativescript-community/ui-svg").SVGView
);

install();
DrawerElement.register();




svelteNativeNoFrame(App, {})
