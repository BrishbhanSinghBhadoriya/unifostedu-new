type ModalProps={
 open:boolean,
  onOpenChange:(value:boolean)=>void,
  title :string,
  subtitle:string,
  imageSrc :string,
  universityName?:string,
  defaultProgram : string,
  formType : string,
  showImage?: boolean,

}
export type {ModalProps}