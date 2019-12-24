
 
export default {
  //必填项手动加星号(input)
  requiredStar(msg, trg) {
    let obj = { required: true, validator: checkPermission, trigger: 'blur' }
    return result(obj, msg, trg)
  },
  //必填项手动加星号(select)
  requiredStars(msg, trg) {
    let obj = { required: true, validator: checkPermission, trigger: 'change' }
    return result(obj, msg, trg)
  },
  //必填
  required(msg, trg) {
    let obj = { required: true, message: '该信息必填', trigger: 'blur' }
    return result(obj, msg, trg)
  },
  //长度约束 min>0, max>min
  len(min, max, msg, trg) {
    let rmsg = ''
    if (min) rmsg += ' 最短长度为' + min
    if (max) rmsg += ' 最长长度为' + max
    let obj = { min: min, max: max, message: rmsg, trigger: 'blur' }
    return result(obj, msg, trg)
  },
  //汉字字母
  cwd(msg, trg) {
    let obj = {
      pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
      message: '只能输入汉字、字母、数字、下划线',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //数字字母
  wd(msg, trg) {
    let obj = {
      pattern: /^[A-Za-z0-9]*$/,
      message: '只能输入数字、字母',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //数字字母下划线
  word(msg, trg) {
    let obj = {
      pattern: /^[A-Za-z0-9_]*$/,
      message: '只能输入数字、字母和下划线',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  code(msg, trg) {
    let obj = {
      pattern: /^((?!_)(?!.*?_$)[a-zA-Z0-9_]|_(?!_))+$/,
      message: '编码错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //只允许输入英文、数字、汉子、下划线、小括号！
  name(msg, trg) {
    let obj = {
      pattern: /^[\u4E00-\u9FA5A-Za-z0-9_()（）]+$/,
      message: '只允许输入英文、数字、汉子、下划线、小括号！',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //用户名只允许输入数字、字母、下划线，必须以字母开头！
  userName(msg, trg) {
    let obj = {
      pattern: /^[a-zA-Z][a-zA-Z0-9_]*$/,
      message: '只允许输入数字、字母、下划线，必须以字母开头！',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //固定电话
  fixed(msg, trg) {
    let obj = {
      pattern: /^([\d]{3,4}|[\d]{3,4}-)?[\d]{7,8}$/,
      message: '固定电话格式不正确！',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //qq
  qq(msg, trg) {
    let obj = {
      pattern: /^[1-9][0-9]{4,9}$/,
      message: 'qq格式不正确！',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //email
  email(msg, trg) {
    let obj = {
      pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
      message: 'email格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //移动电话
  mobilePhone(msg, trg) {
    let obj = {
      pattern: /^1[34578]\d{9}$/,
      message: '手机号码格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  mobile(msg, trg) {
    let obj = {
      pattern: /^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$/,
      message: '手机号码格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //邮政编码
  postalCode(msg, trg) {
    let obj = {
      pattern: /^[1-9]{1}(\d+){5}$/,
      message: '邮政编码格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
 
  //汉字
  chineseVerify(msg, trg) {
    let obj = {
      pattern: /^[\u4e00-\u9fa5]+$/,
      message: '汉字格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
 
  //英文
  englishVerify(msg, trg) {
    let obj = {
      pattern: /^[a-zA-Z]+$/,
      message: '英文格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //特殊字符
  commonWord(msg, trg) {
    let obj = {
      pattern: /^[a-zA-z_\+\-\*/=!@#$%^&:;'",\.<>\?\|\\：“‘；，。？！￥《》~`·…—{}\[\]\d\(\)\u4E00-\u9FA5 \n]*$/,
      message: '不允许输入特殊字符',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //小数 int>0, flo>=0
  float(int, flo, msg, trg) {
    let regstr =
      '^\\-?(([1-9]\\d{0,' + (int - 1) + '})|0)(\\.\\d{0,' + flo + '})?$'
    let reg = new RegExp(regstr)
    let obj = {
      pattern: reg,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //非负小数 int>0, flo>=0
  usFloat(int, flo, msg, trg) {
    let regstr = '^(([1-9]\\d{0,' + (int - 1) + '})|0)(\\.\\d{0,' + flo + '})?$'
    let reg = new RegExp(regstr)
    let obj = {
      pattern: reg,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //大于0的数
  plusFloat(int, flo, msg, trg) {
    let regstr =
      '^(([1-9]\\d{0,' +
      (int - 1) +
      '})(\\.\\d{0,' +
      flo +
      '})?)|((0)(\\.\\d{0,' +
      flo +
      '}))?$'
    let reg = new RegExp(regstr)
    let obj = {
      pattern: reg,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //整数 int>0
  int(int, msg, trg) {
    let regstr = '^\\-?(([1-9]\\d{0,' + (int - 1) + '})|0)$'
    let reg = new RegExp(regstr)
    let obj = {
      pattern: reg,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //非负整数 int>0
  usInt(int, msg, trg) {
    let regstr = '^(([1-9]\\d{0,' + (int - 1) + '})|0)$'
    let reg = new RegExp(regstr)
    let obj = {
      pattern: reg,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //正整数 int>0
  plusInt(int, msg, trg) {
    let regstr = '^[1-9]\\d{0,' + (int - 1) + '}$'
    let reg = new RegExp(regstr)
    let obj = {
      pattern: reg,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //身份证
  idNumber(trg) {
    let obj = {
      validator: idNumberValidator,
      trigger: 'blur'
    }
    return result(obj, null, trg)
  },
  //护照
  passportNbr(str) {
    return /^(^[a-zA-Z0-9]{5,17}$)|(^1[45][0-9]{7}|([P|p|S|s]\\d{7})|([S|s|G|g]\\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\\d{8})|([H|h|M|m]\\d{8,10})$)/.test(
      str
    )
  },
  //驾驶证
  driverLience(str) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x|X)$/.test(
      str
    )
  },
  //同时验证手机号码和固定电话
  number(msg, trg) {
    let obj = {
      pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
      message: '手机号码或固定电话格式不对，请重新输入！',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //编号
  num(msg, trg) {
    let obj = {
      pattern: /^[0-9]+$/,
      message: '编号只允许输入数字',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //自定义正则
  pattern(pat, msg, trg) {
    let obj = {
      pattern: pat,
      message: '输入不合法',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  },
  //自定义方法
  validator(fun, trg) {
    let obj = {
      validator: fun,
      trigger: 'blur'
    }
    return result(obj, null, trg)
  },
  //手机号码
  telephone(msg, trg) {
    let obj = {
      pattern: /^1[0-9]{10}$/,
      message: '手机号码格式错误',
      trigger: 'blur'
    }
    return result(obj, msg, trg)
  }
}
