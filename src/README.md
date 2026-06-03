# RiskMind — מבנה קוד (React Native + Expo + TypeScript)

> שלד בלבד. כל הקבצים כאן הם נקודת התחלה מסודרת — אין עדיין לוגיקה אמיתית.
> ה־source of truth של המוצר הוא `CLAUDE.md` בשורש.

## תיקיות

```
src/
├── navigation/     # ניווט: RootNavigator (Stack) + TabNavigator (בית·חישוב·לימוד·עוד)
├── screens/        # מסך לכל מסך מסעיף 7 ב־CLAUDE.md
├── components/
│   ├── common/     # רכיבים משותפים (ScreenPlaceholder)
│   ├── paywall/    # PaywallModal — modal מלמטה (סעיף 8)
│   └── warnings/   # WarningCard — אזהרות צהוב/אדום (סעיף 9)
├── features/
│   ├── calculator/ # לוגיקת החישוב (סעיף 7.4) — לא ממומש
│   ├── warnings/   # מנוע האזהרות (סעיף 9) — לא ממומש
│   └── premium/    # מצב Premium / רכישה חד־פעמית (סעיפים 4, 8)
├── theme/          # צבעים (קר/חם — לא נסגר), טיפוגרפיה, spacing
├── i18n/           # מחרוזות עברית (RTL)
├── constants/      # קטלוג סוגי פקודות (סעיף 7.7)
└── types/          # טיפוסי דומיין משותפים
```

## הרצה

```
npm install
npx expo start
```

## כללים (מ־CLAUDE.md סעיף 11)

- ⛔ לא להוסיף פיצ'רים מעבר ל־MVP
- ✅ אם משהו לא ברור — לשאול
