
 "use strict";


  
    function Component(props) {
     
      return (
        <>
           <div className="title-box mt-5 mb-4">
              <h3 className="text-light">JSON</h3>
              <i class="bi bi-arrow-left-right arrows"></i>
              <h3 className="text-light">Node.js</h3>
              <i class="bi bi-arrow-left-right arrows"></i>
              <h3 className="text-light">React</h3>
             
             
           </div>

          <div className="imgsBox">
           <img src="./n.png" className="imgNode" alt="Logo" /> 
           <img src="./react.png" className="imgReact" alt="Logo" />        
          </div>

          <h6 className="text-center text-light mt-4">-------------</h6>
          <h5 className="text-center text-light">Tools</h5>
          <h6 className="text-center text-light">-------------</h6>
          {
            props.list.map(item => {
              return (
                <p key={item.id} className="text-center list">{item.item}</p>
              )
            })
          }
          
        </>
      )
    }




  $.getJSON("anything", function(data) {
    const Root = 
    ReactDOM.createRoot(document.querySelector('.root'));
  
    Root.render(
      <Component list={data} />
    );
  }
  );