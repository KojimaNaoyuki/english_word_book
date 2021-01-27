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
    const level4_English = ['doctor', 'actor', 'return', 'war', 'meal', 'boring', 'exist', 'fresh'];
    const level4_Japanese = ['医者', '俳優', '戻る', '戦争', '食事', '退屈な', '存在する', '新鮮な'];

    if(judg == 0) {
        return level4_English;
    } else {
        return level4_Japanese;
    }
}

export const DataLevel5 = (judg) => {
    const level5_English = ['popular', 'drop', 'symbol', 'leader', 'shoot'];
    const level5_Japanese = ['人気', '落ちる', '象徴', '指導者', '撃つ'];

    if(judg == 0) {
        return level5_English;
    } else {
        return level5_Japanese;
    }
}

export const DataLevel6 = (judg) => {
    const level6_English = ['creature', 'rare', 'investigation'];
    const level6_Japanese = ['生き物', 'まれな', '調査'];

    if(judg == 0) {
        return level6_English;
    } else {
        return level6_Japanese;
    }
}