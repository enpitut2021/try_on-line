class judge{
    constructor(params){//コンストラクタ
    //必須入力
    this.sex = params.sex;
    this.height = params.height;
    this.weight = params.weight;
    //任意入力または必須入力からのオートフィル
    this.shoulder = params.shoulder; //肩幅
    this.bust = params.bust;
    this.waist = params.waist;
    this.hip = params.hip;
    this.rise = params.rise; //股上
    this.inseam = params.inseam; //股下
    }

    judgeWaist2(Cwaist1,Cwaist2){//ウエストの判定,服のウエストを引数(Cwaist1~Cwaist2)//引数2つ
        var j = -1;// j = {0,キツイ},{1,タイトな感じ～},｛2,ちょうどいい},{3,ルーズフィット！},{4,ぶかぶか}
        this.waist += 3;//基準サイズ
        var avgWaist = average(Cwaist1,Cwaist2);
        //判定部
        if(this.waist<Cwaist1) j = 0;
        else if(Cwaist1<=this.waist&&this.waist<=avgWaist) j = 1;
        else if(this.waist>=avgWaist-1&&this.waist<=avgWaist+1) j = 2;
        else if(this.waist>=avgWaist&&this.waist<=Cwaist2) j = 3;
        else if(this.waist>Cwaist2) j = 4;

        var Message = '';
        var judgeColor = "";
        switch(j){// j = {0,キツイ},{1,タイトな感じ～},｛2,ちょうどいい},{3,ルーズフィット！},{4,ぶかぶか}
            case 0:
                Message = 'キツイ';
                judgeColor = "red";
            case 1:
                Message = 'タイトな感じ!';
                judgeColor = "yellow";
            case 2:
                Message = 'ちょうどいい';
                judgeColor = "green";
            case 3:
                Message = 'ルーズフィット';
                judgeColor = "aqua";

            case 4:
                Message = 'ぶかぶか';
                judgeColor = "blue";

        }
        return Message, judgeColor;
    }

    judgeWaist1(Cwaist){//引数一つ
        this.judgeWaist2(Cwaist-3,Cwaist+3);
    }

    judgeLength(length){//身丈の判定
        var j = -1;//j = {0,短すぎ},{1,短め},｛2,ちょうどいい},{3,長め},{4,長すぎ}
        
    }

    judgeBackLength(length){//着丈の判定
        this.judgeLength(length+3);
    }

    judgeWidth(Cwidth){//身幅の判定

    }
}