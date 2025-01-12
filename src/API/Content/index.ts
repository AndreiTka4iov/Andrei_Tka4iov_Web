import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

export const contentAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: backend_url }),
  tagTypes: ['ValidationArticle', 'AllProducts', 'AllCollapsed'],
  endpoints: build => ({
//     // Найти все продукты с фильтром
//     fetchAllProducts: build.query<ProductListItem, fetchAllProductsType>({
//       query: data => ({
//         url: '/products/all',
//         method: 'POST',
//         body: { ...data },
//       }),
//       providesTags: () => ['AllProducts'],
//     }),
//     // Найти все модификации и продукты с фильтром
//     fetchAllCollapsed: build.query<ICollapsedItem[], null>({
//       query: () => ({
//         url: '/products/all-collapsed',
//       }),
//       providesTags: () => ['AllCollapsed'],
//     }),
//     // Ищем цены для вычисления относительной  цены
//     getPriceByIdAndTypeId: build.query<number, getPriceByIdAndTypeId>({
//       query: data => ({
//         url: '/products/getPriceByIdAndTypeId',
//         params: data,
//       }),
//     }),
//     // Проверка на уникальность артикула
//     validateArticle: build.query<boolean, string>({
//       query: article => ({
//         url: `/products/validateArticle`,
//         params: { article },
//         providesTags: () => ['ValidationArticle'],
//       }),
//     }),
//     // Найти все кастомные параметры
//     fetchAllCustomField: build.query<CustomFieldNoInclude[], null>({
//       query: () => ({
//         url: '/products/customFields',
//       }),
//     }),
//     // Найти все возможные значения кастомных параметров
//     fetchAllCustomEntity: build.query<CustomEntity[], null>({
//       query: () => ({
//         url: '/products/customEntities',
//       }),
//     }),
//     // Найти все группы продуктов
//     fetchAllProductGroups: build.query<ProductGroup[], null>({
//       query: () => ({
//         url: '/products/productGroup',
//       }),
//     }),
//     // Найти все цены продуктов
//     fetchAllPrice: build.query<ProductPrice[], null>({
//       query: () => ({
//         url: '/products/prices',
//       }),
//     }),
//     // Найти все возможные типы цен
//     fetchPriceTypes: build.query<PriceType[], null>({
//       query: () => ({
//         url: '/products/priceTypes',
//       }),
//     }),
//     // Удаление продукта
//     deleteProductsById: build.mutation<ProductListItem[], string[]>({
//       query: ids => ({
//         url: '/products/deleteProducts',
//         method: 'DELETE',
//         body: { ids },
//       }),
//       invalidatesTags: ['AllProducts', 'ValidationArticle', 'AllCollapsed'],
//     }),
//     // Создание продукта
//     createProduct: build.mutation<Product, CreateProductCard>({
//       query: data => ({
//         url: '/products/createProduct',
//         method: 'POST',
//         body: { ...data },
//       }),
//       invalidatesTags: ['AllProducts', 'ValidationArticle', 'AllCollapsed'],
//     }),
//     // Копирование продукта по id
//     copyProduct: build.mutation<Product, string>({
//       query: id => ({
//         url: '/products/copyProduct',
//         method: 'POST',
//         body: { id },
//       }),
//       invalidatesTags: ['AllProducts', 'ValidationArticle', 'AllCollapsed'],
//     }),

//     // Найти продукт по артикулу
//     fetchProductByArticle: build.query<Product, string>({
//       query: article => ({
//         url: '/products/product',
//         params: { article },
//       }),
//     }),
  }),
});