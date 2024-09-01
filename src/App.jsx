import { PLACES } from "./Places";
import According from "./components/According";
import Place from "./components/Places";
import Serachable from "./components/Searchable/Serachable";

function App() {
  return (
    <>
      <main>
        <section>
          <h1>Why work with us</h1>
          <According className="accordion">
            <According.Item id="1" className="accordion-item">
              <According.Title className="accordion-item-title">
                we got 20 years of exprience
              </According.Title>
              <According.Content className="accordion-item-content">
                <article>
                  <p>rapid advancement of technology</p>
                  <p>
                    The rapid advancement of technology has transformed the way
                    we live, work, and interact.
                  </p>
                </article>
              </According.Content>
            </According.Item>
            <According.Item id="2" className="accordion-item">
              <According.Title className="accordion-item-title">
                we are working with local clients
              </According.Title>
              <According.Content className="accordion-item-content">
                <article>
                  <p>invention of technology</p>
                  <p>
                    the invention of the internet to the rise of artificial
                    intelligence.
                  </p>
                </article>
              </According.Content>
            </According.Item>
          </According>
        </section>
        <section>
          <Serachable items={PLACES} itemKeyFn={(item) => item.id}>
            {(item) => <Place item={item} />}
          </Serachable>
          <Serachable items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
            {(item) => {
              return <p>{item}</p>;
            }}
          </Serachable>
        </section>
      </main>
    </>
  );
}

export default App;
