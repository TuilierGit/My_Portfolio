import { useState } from "react";
import AccordionItem from "./AccordionItem";

interface AccordionItem {
  id: number;
  title: string;
  body: string;
}

interface Props {
  accordions: AccordionItem[];
}

const Accordion = ({ accordions }: Props) => {
  const [selectedAccordion, setSelectedAccordion] = useState(-1);

  const onSelectItem = (index: number) => {
    if (selectedAccordion == index) {
      setSelectedAccordion(-1);
    } else {
      setSelectedAccordion(index);
    }
  };

  return (
    <div className="accordion" id="accordionExample">
      {accordions.map((accordion) => (
        <AccordionItem
          key={accordion.id}
          id={accordion.id}
          accordionTitle={accordion.title}
          accordionBody={accordion.body}
          isSelected={selectedAccordion == accordion.id}
          onSelectItem={onSelectItem}
        />
      ))}
    </div>
  );
};

export default Accordion;
