import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все товары" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Пицца" items={[
                {
                  id: 1, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 2, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 4, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 5, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 6, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 7, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 8, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 9, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
              ]} 
                categoryId={1}
              />
              <ProductsGroupList title="Комбо" items={[
                {
                  id: 12, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 21, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 31, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 41, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 51, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 61, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 71, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 81, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
              ]} 
                categoryId={2}
              />
              <ProductsGroupList title="Завтрак" items={[
                {
                  id: 12, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 21, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 31, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 41, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 51, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 61, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 71, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
                {
                  id: 81, 
                  name: 'Чоризо', 
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                  price: 550,
                  items: [{price: 550}]
                },
              ]} 
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
