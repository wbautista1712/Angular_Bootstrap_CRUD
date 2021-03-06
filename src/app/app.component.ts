import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Proyecto de Angular CRUD';

  empleado=[
    { 'nombre': 'Wilber Bautista', 'cargo':'Jefe de Proyecto','oficina':'GREP'},
    { 'nombre': 'Edison Rojas', 'cargo':'Gerente','oficina':'GNF'},
    { 'nombre': 'Wilder Quipuzco', 'cargo':'Ingeniero','oficina':'GA'},
    { 'nombre': 'Vanessa Jeri', 'cargo':'Contadora','oficina':'RH'}
  ];

  model:any={};
  model2:any={};
  msg:string='';
  myId;
  hideUpdate:boolean=true;

  addEmpleado():void{
    this.empleado.push(this.model);
    this.msg='Empleado agregado con éxito';
  }


  editEmpleado(i):void{
    this.model2.nombre=this.empleado[i].nombre;
    this.model2.cargo=this.empleado[i].cargo;
    this.model2.oficina=this.empleado[i].oficina;
    this.myId=i;
    this.hideUpdate=false;
  }
  updateEmpleado():void{
    let i=this.myId;
    for(let j=0; j<this.empleado.length; j++)
    {
      if(i==j)
      {
        this.empleado[i]=this.model2;
        this.model2={};
        this.msg='Modificado con éxito'
        this.hideUpdate=true;
      }
    }
  }

  deleteEmpleado(i):void{
    var respuesta=confirm('Está seguro de eliminarlo');
    if(respuesta)
    {
      this.empleado.splice(i,1);
      this.msg='Eliminado con éxito';
    }
  }

  closeAlert():void
    {
      this.msg='';
    }

}
