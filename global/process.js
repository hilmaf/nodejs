// process 객체 : 현재 실행되고 있는 노드 프로세스에 대한 정보를 담고 있다

/**
 * process.version : 설치된 노드의 버전
 * process.arch : 프로세서 아키텍처 정보
 * process.platform : 운영체제 정보
 * process.pid : 현재 프로세스의 아이디
 * process.uptime() : 프로세스가 시작된 후 흐른 시간(초)
 * process.execPath : 노드의 경로
 * process.cwd() : 현재 프로세스가 실행되는 위치
 * process.cpuUsage() : 현재 cpu 사용량
 */

setImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => {
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));