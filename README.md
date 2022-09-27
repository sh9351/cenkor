# Cenkor - 손쉬운 비속어 검열
### *Cenkor의 비속어 데이터셋은 [Korcen](https://github.com/KR-korcen/korcen)에서 제공받았어요*

Cenkor은 속도와 편리함을 위해 제작된 Node.js 전용 한국어 비속어 검열 패키지에요. 아래의 예제를 확인하여 곧바로 시작해 보세요.

# 예제
```js
const cenkor = require('cenkor')
console.time()
const result = cenkor('문자열')
console.timeEnd()
console.log(result)
```

Cenkor은 For-loop 대신 Reduce 함수를 사용하므로써 간단한 문장 검열은 0.5ms 이내로 완료할 수 있어요. 또한, 아래와 같이 30,000글자의 긴 문서도 약 12ms 이내로 완료할 수 있어요.
```js
const cenkor = require('cenkor')
console.time()
const result = cenkor('문자열'.repeat(10000))
console.timeEnd()
console.log(result)
```

# 개발자
Cenkor은 [Korcen](https://github.com/KR-korcen/korcen)의 데이터셋을 활용하여 [임세훈](https://sh9351.github.io) 개발자가 제작하였어요. [외주 문의](https://sh9351.github.io/outsource)는 환영이에요!