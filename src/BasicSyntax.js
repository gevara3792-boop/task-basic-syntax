export function romanToInteger(roman) {
    // Создаем объект-словарь для быстрого доступа к значениям символов
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    // Проходим по каждому символу строки
    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        // Смотрим на следующий символ. Если он есть - берем его значение, иначе 0.
        const next = romanMap[roman[i + 1]] || 0;

        // Если текущий символ меньше следующего, вычитаем его (например, I перед V)
        if (current < next) {
            result -= current;
        } else {
            // Иначе прибавляем
            result += current;
        }
    }

    return result;
}
