import Header from '../../components/Header';

const question = "(Enem 2020) Uma torneira está gotejando água em um balde com capacidade de 18 litros. No instante atual, o balde se encontra com ocupação de 50% de sua capacidade. A cada segundo caem 5 gotas de água da torneira, e uma gota é formada, em média, por 5x10⁻² ml de água. Quanto tempo, em hora, será necessário para encher completamente o balde, partindo do instante atual?";
const alternatives = ['1 x 10⁻³', '2 x 10¹', '1 x 10¹', '2 x 10⁻²', '1 x 10⁻²'];
const correctAlternative = '1 x 10⁻³';

export default function Home() {
  return (
    <main className="p-6">
      <Header />
      <div>
        <button>VOLTAR</button>
        <p>{ question }</p>
        <div>
          {
            alternatives.map((alternative, i) => (
              <>
                <input name='alternative' type="radio" id={ i } />
                <label name='alternative' htmlFor={ i }>{ alternative }</label>
                <br />
              </>
            ))
          }
        </div>
        <button>RESPONDER</button>
      </div>
    </main>

  );
}
