import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { NgForm ,FormsModule} from '@angular/forms';
import { ProductUpdate,Product } from '../../shared/product.model';
import { formArrayNameProvider } from '../../../../node_modules/@angular/Forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public service :ProductService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? :  NgForm){
 if (form!=null)
    form.resetForm();
    this.service.formData ={    
      id:'',
   productName:'',
   productDescription:'',
   price:''
   }


  }


  onSubmit(form :NgForm)
  {
this.insertRecord(form);
  }

insertRecord(form :NgForm)
{
 let   proUpdate= new ProductUpdate();

 proUpdate.productName=this.service.formData.productName;
 proUpdate.productDescription=this.service.formData.productDescription;
 proUpdate.price=this.service.formData.price;

  this.service.postProduct(proUpdate).subscribe((resposne)=>{
   
    console.log(resposne);
  });

  
}

  

}

