function solution(board, moves) {
    var answer = 0;
    let basket =[]; // 인형을 뽑아 담을 공간
    moves.forEach(pos =>{
        for(let i=0; i<board.length; i++){
            if(board[i][pos-1] !==0){               //0이 아닐경우 인형을 만난다,
                let tmp = board[i][pos-1];          //인형을 꺼낸다.
                board[i][pos-1] =0;                //인형을 꺼내면 0으로 만든다.
                if(tmp=== basket[basket.length-1]){ //바구니 맨위와 비교 후 같으면 제거 
                    basket.pop();
                    answer +=2  //값 추가 
                }
                else basket.push(tmp); 
                break;  //인형을 하나만 꺼냄
            }
        }
    })
    
    return answer;
}

console.log(solution([
                        [0,0,0,0,0],
                        [0,0,1,0,3],
                        [0,2,5,0,1],
                        [4,2,4,4,2],
                        [3,5,1,3,1]
                    ],
                    [1,5,3,5,1,2,1,4]))