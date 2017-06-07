/**
 * Contrat of the Book Model
 * 
 * @export
 * @interface Book
 */
export interface Book{
     
     id:string;
     volumeInfo:{
         title:string;
         subtitle:string;
         authors:string[];
         publisher:string;
         publishDate:string;
         description:string;
     }
}