export const ROUTER_LIST = [
  {
    "path": "components/button",
    "label": "button 按钮"
  },
  {
    "path": "components/input",
    "label": "input 输入框"
  }
];
export const DEMO_ROUTES = [
{'path': 'components/button', 'loadChildren': './button/index.module#NzDemoButtonModule'},
{'path': 'components/input', 'loadChildren': './input/index.module#NzDemoInputModule'},

];
