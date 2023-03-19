# react-2022-05-24

# ДЗ.

## Как делать:

0. Сделать форк этого репозитория в свой аккаунт (только 1 раз в самом начале).

1. Перед выполнением ДЗ сделайте пул мастера этого репозитория себе в форк (чтобы иметь актуальный код);
2. Обновить зависимости `yarn` или `npm i`;
3. Создайте новую ветку от актуального мастера для выполнения ДЗ;
4. Выполните ДЗ в этой ветке;
5. Сделайте Pull Request этой ветки в мастер моего репозитория;
6. Напишите мне (a.senyukov@javascript.info) письмо со ссылкой на PR.

**Важно! В результате всех этих манипуляций в вашем мастере должны быть только мои комиты, все ваши комиты должны быть в отдельных ветках под каждую домашку.**

Дедлайн – 23:00 по GMT+3 за день до занятия.


HT1
=====
1. В каждом ресторане отображать его меню. Меню - 4 позиции(4 блюда, только название). В каждом ресторане разные.
2. В каждом ресторане отображать отзывы о нем. По 3 отзыва в каждом (Только текст отзыва). В каждом ресторане свои отзывы.

HT2
====
1. Создать компонент Rate, который принимает рейтинг (число от 1 до 5) и отображает его звездочками свг. Например <Rate value={3} />. Отрисовываем в компоненте Restaurant и Component.
2. В компоненте Restaurant отрисовываем средний рейтинг по всем ревью.
3. Создать компонент Component, который принимает все ревью по одному ресторану и отображает имена и отзывы про ресторан, а так же рейтинг с помощью компонента Rate. Отрисовываем в компоненте Restaurant. 

HT3
====
1. В компоненте ресторанов отрисовать кнопки с названиями ресторанов, по клику на которые выбирается ресторан.
2. В форму добавления ревью добавить возможность проставить рейтинг(ввод только чисел). При изменении имени рейтинг в форме сбрасывается как и текст. Добавить поле и доработать reducer.
**Доп задание: вместо инпута рейтинга сделать звездочки по клику на которые будет вводится рейтинг.**

HT4
====
1. Надо вернуть корзину. Мы переделали модуль корзины с имен на id. Поэтому нужно создать контейнер для компонента корзины и получать из модуля корзины id выбранных продуктов, по id отрисовыать контейнеры продуктов корзины и уже по id получать название и количество.
2. Для ревью и юзеров создать модули в сторе. (редьюсеры и селекторы по аналогии с продуктами).
3. Надо вернуть ревью. Действуем по аналогии с меню. Создаем ReviewContainer, UserContainer и компонент User.

HT5
====
1. Переписать оставшиеся модули на слайсы.
2. Реализовать табы ресторанов.

HT6
====
1. необходимо отказаться от моков и полностью перейти на получение данных с сервера.

Заметки к ДЗ 6:
1. Инициируйте загрузку данных как можно ближе к месту использования, но в контейнере.
2. Грузить продукты и ревью только по конкретному ресторану. (`products?id=${restaurantId}`).
3. Не грузить если уже загружены.
4. Для продуктов и ревью не затирайте данные в сторе, а мерджите их.
5. ЗАПУСТИТЕ СЕРВЕР ПЕРЕД ПРИЛОЖЕНИЕМ) (npm run start-server, yarn run start-server).

HT7
====
1. Сделать страницу с списком всех блюд из всех ресторанов.
2. По клику на блюдо открывать страницу этого блюда с всей информацией о нем. (важно, проверяем, что продукт загружен, либо грузим только его)
* Добавить табы меню и ревью в ресторан. По клику на таб открывать меню или ревью как вложенные роуты ресторана.
