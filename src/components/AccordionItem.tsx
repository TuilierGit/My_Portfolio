import { ReactNode } from "react";

interface Props {
  id: number;
  accordionTitle: string;
  accordionBody: ReactNode;
  isSelected: boolean;
  onSelectItem: (index: number) => void;
}

const AccordionItem = ({
  id,
  accordionTitle,
  accordionBody,
  isSelected,
  onSelectItem,
}: Props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" onClick={() => onSelectItem(id)}>
        <button
          className={
            isSelected ? "accordion-button" : "accordion-button collapsed"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded={isSelected ? "false" : "true"}
          aria-controls="collapseOne"
        >
          {accordionTitle}
        </button>
      </h2>
      <div
        id="collapseOne"
        className={
          isSelected
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse "
        }
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{accordionBody}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
