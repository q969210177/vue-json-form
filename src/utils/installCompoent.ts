// const modulesFiles = require.context(
//   '@/components/cssCompoents/',
//   false,
//   /\.(vue|jsx)$/,
// );
// console.log(modulesFiles);
import compoentArr from '@/form/compoent/index';
export function installFunc(app:any){
  compoentArr.forEach(i=>{
    const compoentName = i.name.toLowerCase()
    console.log(compoentName);
    app.component(compoentName,i)
  })
}

