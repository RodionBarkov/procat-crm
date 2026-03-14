import './../../App.css';
import ProdTemplate from './templates/ProdTemplate';


  const Projects = (props) => {
    let prod = [
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Река', date: '25.12.24', manager: 'Барков', price: '560 000 рублей' },
      { name: 'Озеро', date: '25.12.24', manager: 'Барков', price: '1 000 рублей' },
      { name: 'Дача', date: '25.12.24', manager: 'Барков', price: '70 000 рублей' },
      { name: 'Стадион', date: '25.12.24', manager: 'Барков', price: '5 000 рублей' }
    ]

    let projectElement = prod.map(p => <ProdTemplate name={p.name} date={p.date} manager={p.manager} price={p.price} />);

  return (
    <div className='workarea-block'>

      {projectElement}

    </div>
  );
}

export default Projects;