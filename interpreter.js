const sleep =ms=> new Promise(resolve => setTimeout(resolve,ms));

const main =async()=>{
  let g ={};
  await sleep(1000);
  while(true){
    let str =window.prompt("please write command");
    if(str===null)
      break;
    eval(str);
    await sleep(300);
  }
  console.log("fin");
}

window.onload =()=> main();