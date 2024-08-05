import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все товары" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
              {/* <ProductsGroupList title="" items={[1, 2, 3, 4, 5]} />
              <ProductsGroupList title="" items={[1, 2, 3, 4, 5]} /> */}
            </div>
          </div>
          
        </div>
      </Container>
    </>
  );
}
