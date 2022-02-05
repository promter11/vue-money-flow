const CategoryService = {
    async getCategories() {
        return Promise.resolve([
            {
                balance: 400,
                id: 1,
                name: "Продукты",
                type: "income",
            },
            {
                balance: 20,
                id: 2,
                name: "Недвижимость",
                type: "income",
            },
            {
                balance: 320,
                id: 3,
                name: "Транспорт",
                type: "income",
            },
            {
                balance: 50,
                id: 4,
                name: "Здоровье",
                type: "income",
            },
            {
                balance: 0,
                id: 5,
                name: "Досуг",
                type: "income",
            },
            {
                balance: 0,
                id: 6,
                name: "Подарки",
                type: "income",
            },
            {
                balance: 1000,
                id: 7,
                name: "Покупки",
                type: "income",
            },
            {
                balance: 90000,
                id: 8,
                name: "Зарплата",
                type: "costs",
            },
        ]);
    },
};
export default CategoryService;
//# sourceMappingURL=CategoryService.js.map