
function InicioPrincipal({ existe }) {
  return (
    <div className='container pt-3 min-vh-100'>
      <div className='d-flex flex-column'>
        <div className="pb-5 px-0">
        
        </div>
        {existe === "No" && (
          <div>
            <div className="pb-5 px-3">
             
            </div>
            <div className="pb-5 ">
             
            </div>
          </div>
        )}
        {existe === "Si" && (
          <div>
           
            <div className="pb-5 px-3">
             
            </div>
          </div>
        )}
      </div>
    </div >
  );
};

export default InicioPrincipal;
