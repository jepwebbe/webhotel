export const Component = ({ showBgColor, children, dummyText, dummyArray, dummyDOMElement, bgColor }) => {
    return (
      <section style={{ backgroundColor: showBgColor && bgColor }}>
        {children}
        <footer>{dummyText}</footer>
        {dummyDOMElement}
        <aside>
          <ul>
            {dummyArray.map((item, i) => (
              <li key={i}>
                <p>
                  <span>navn: {item.name}</span>, <span>køn: {item.gender}</span>
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  };