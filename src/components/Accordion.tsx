import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(-1);

  const onSelectItem = (index: number) => {
    if (selectedAccordion == index) {
      setSelectedAccordion(-1);
    } else {
      setSelectedAccordion(index);
    }
  };

  const accordion1 = {
    id: 1,
    title: "Accordion Item #1",
    body: "salut toi",
  };

  const accordion2 = {
    id: 2,
    title: "Accordion Item #2",
    body: "salut toi",
  };

  const accordion3 = {
    id: 3,
    title: "Accordion Item #3",
    body: "salut toi",
  };

  return (
    <div className="accordion presentation-container" id="accordionExample">
      <AccordionItem
        id={accordion1.id}
        accordionTitle={accordion1.title}
        accordionBody={accordion1.body}
        isSelected={selectedAccordion == accordion1.id ? true : false}
        onSelectItem={onSelectItem}
      />

      <AccordionItem
        id={accordion2.id}
        accordionTitle={accordion2.title}
        accordionBody={accordion2.body}
        isSelected={selectedAccordion == accordion2.id ? true : false}
        onSelectItem={onSelectItem}
      />

      <AccordionItem
        id={accordion3.id}
        accordionTitle={accordion3.title}
        accordionBody={accordion3.body}
        isSelected={selectedAccordion == accordion3.id ? true : false}
        onSelectItem={onSelectItem}
      />

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
