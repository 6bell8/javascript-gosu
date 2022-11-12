function solution(hp) {
    var answer = 0;
    
    let ant1 = Math.floor(hp / 5);
    let ant2 = Math.floor(hp % 5 / 3);
    let ant3 = Math.floor(hp % 5 % 3 / 1 );
    
   
    return ant1 + ant2 + ant3
    
}

// 나머지 값을 최대한 줄이는 식으로 정수로 만들어 더해준다.