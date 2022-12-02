function solution(n, t) {
    for(let i = 1; t >= i; i++ ){
        n *= 2
    }
    return n
}

//  n *= 2 누적곱
// 한시간에 2배씩 늘어나는 세균을 i = 1 로 설정해서 시간이 다 될 때 까지 누적해서 올라가는 풀이

function solution(n, t) {
    while (t-- > 0) n*=2;
    return n;
}

// t시간이 0보다 큰 시간동안 n *= 2 해준다.