import React from 'react';

const List = props => (
<div className="row justify-content-center">
  <ul className="list-group col-10" id="lista">
	<li className="list-group-item " >
						<div className="col-3" id="obok">PRIORYTET</div>
						<div className="col-8" id="obok">TREŚĆ ZADANIA </div>
					</li>
    {	
     props.items.map((item, index) => <li onClick={() => alert('Usunąć') } className="list-group-item" id="kolor" key={index}>
	 <div className="col-3" id="obok">{item[0]}</div>
	 <div className="col-8" id="obok">{item[1]}</div> 
	</li>)
    }
  </ul>
 </div>
);

export default List;



