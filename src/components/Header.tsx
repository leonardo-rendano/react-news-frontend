import { InputText } from 'primereact/inputtext';
        
export const Header: React.FC = () => {
  return (
   <header className="bg-red-600 h-4rem text-0 flex align-items-center">
      <div className="flex justify-content-between align-items-center m-auto w-7">
        <h1>React News</h1>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Buscar"
            className="p-inputtext-sm "
          />
        </span>
      </div>
    </header>
  )
}