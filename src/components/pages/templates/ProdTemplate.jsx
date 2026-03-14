import './../../../App.css';
import s from './ProdTemplate.module.css';

function ProdTemplate(props) {
  return (


<div className={s.simpleproject}>
<div className={s.headprodLeft}>
<h1>{props.name}</h1>
<p>{props.date}</p>
</div>
<div className={s.headprodRight}>
<p>{props.manager}</p>
<p>{props.price}</p>
</div>
</div>

  );
}

export default ProdTemplate;