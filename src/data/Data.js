export const DataLevel1 = (judg) => {
    const level1_English = ['dog', 'cat', 'cake', 'hello', 'bus', 'basketball', 'volleyball', 'computer', 'car'];
    const level1_Japanese = ['犬', '猫', 'ケーキ', 'こんにちは', 'バス', 'バスケットボール', 'バレーボール', 'パソコン', '車'];

    if(judg == 0) {
        return level1_English;
    } else {
        return level1_Japanese;
    }
}

export const DataLevel2 = (judg) => {
    const level2_English = ['cute', 'easy', 'early', 'stop', 'move', 'history', 'alone', 'carry', 'greet', 'joke'];
    const level2_Japanese = ['かわいい', '簡単', '早い', '止まる', '動く', '歴史', 'ひとりで', 'を運ぶ', 'あいさつ', '冗談'];

    if(judg == 0) {
        return level2_English;
    } else {
        return level2_Japanese;
    }
}

export const DataLevel3 = (judg) => {
    const level3_English = ['actually', 'possible', 'personal', 'smell', 'graduation', 'custom', 'wet', 'actually', 'horizon', 'judge', 'carry', 'mild', 'excited'];
    const level3_Japanese = ['実際に', '可能', '個人', '匂い', '卒業', '慣習', '湿った', '実際に', '地平線', '判断', '運ぶ', 'おだやか', '興奮'];

    if(judg == 0) {
        return level3_English;
    } else {
        return level3_Japanese;
    }
}

export const DataLevel4 = (judg) => {
    const level4_English = ['dog4', 'cat4', 'cake4'];
    const level4_Japanese = ['犬4', '猫4', 'ケーキ4'];

    if(judg == 0) {
        return level4_English;
    } else {
        return level4_Japanese;
    }
}

export const DataLevel5 = (judg) => {
    const level5_English = ['dog5', 'cat5', 'cake5'];
    const level5_Japanese = ['犬5', '猫5', 'ケーキ5'];

    if(judg == 0) {
        return level5_English;
    } else {
        return level5_Japanese;
    }
}

export const DataLevel6 = (judg) => {
    const level6_English = ['dog6', 'cat6', 'cake6'];
    const level6_Japanese = ['犬6', '猫6', 'ケーキ6'];

    if(judg == 0) {
        return level6_English;
    } else {
        return level6_Japanese;
    }
}