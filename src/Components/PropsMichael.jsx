import { Component } from "./PropsMichaelChild";

function PropsMichael() {
  const dummyT = "jeg er en smule dummy text passed igennem props";
  const dummyArr = [
    { name: "Anne", gender: "quinde" },
    { name: "Jeppe", gender: "mand" },
    { name: "Runni", gender: "måske mand" },
  ];

  const DomEl = ({dummyExcl, dummyTitle}) => {
    return <div>Jeg er et react component der passed igennem props. Det er {dummyExcl}, {dummyTitle}</div>;
  };

  return (
    <Component
      showBgColor // svarer til showBgColor={true} fordi den eksistere er den pr. deff. true
      dummyText={dummyT} // pass a simple text
      dummyArray={dummyArr} // pass a array
      dummyDOMElement={<DomEl dummyExcl="megafeee" dummyTitle="manner" />} // indeholder et komponent der er passed igennem props
      bgColor = "purple"
    >
      <section>
        <header>
          <h1>Hej jeg er et komponent med props</h1>
        </header>
        <article>
          <p>Alt der er inde i dette komponent, er children af komponentet. Komponenter inde i andre komponenter kaldes for children.</p>
        </article>
      </section>
    </Component>
  );
}

export default PropsMichael;


