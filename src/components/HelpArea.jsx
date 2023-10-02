import HelpBox from './HelpBox';
import './HelpArea.css';

const HELP_ITEMS = [
  {
    id: 'h1',
    title: 'git hub action',
    text: 'git hub action',
  },
  {
    id: 'h2',
    title: 'git hub action',
    text: 'git hub action',
  },
  {
    id: 'h3',
    title: 'git hub action',
    text: 'git hub action',
  },
];

function HelpArea() {
  return (
    <section data-testid="help-area" id="help-area">
      {HELP_ITEMS.map((item) => (
        <HelpBox key={item.id} title={item.title} text={item.text} />
      ))}
    </section>
  );
}

export default HelpArea;
