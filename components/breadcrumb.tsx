import BreadcrumbItem from "./BreadcrumbItem";

export function Breadcrumb({ breadcrumbItems }: BreadcrumbProps) {
  return (
    <nav className="c-breadcrumb">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex gap-2"
      >
        {breadcrumbItems.map((item, index, array) => (
          <BreadcrumbItem
            {...item}
            index={index + 1}
            isLast={array.length - 1 === index}
            key={index}
          />
        ))}
      </ol>
    </nav>
  );
}
