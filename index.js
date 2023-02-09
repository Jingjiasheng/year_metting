// 标题信息
let title_info = ""
// 员工信息列表
let employees_list = []
// 可以抽奖的员工列表
let avalid_employee_list = []
// 奖品信息列表
let prize_list = []
// 获奖信息列表
let winner_list = []

// 功能
/**
 * 1. 从内存中重新加载数据
 * 2. 更新标题(并刷新数据)
 * 3. 新增员工信息
 * 4. 刷新员工信息
 * 5. 删除员工信息
 * 6. 新增奖品信息
 * 7. 刷新奖品信息
 * 8. 删除奖品信息
 * 9. 刷新获奖列表
 * 10.重置获奖列表
 * 11.新增获奖信息
 * 12.删除获奖信息
 * 13.导出获奖信息
 */

const reload_data = () => {
    
    const local_title_info = JSON.parse(localStorage.getItem("title_info"))
    console.log(local_title_info);
        
    // (逻辑)更新全局页面标题设置
    title_info = local_title_info;
    // (页面)更新设置页面标题, 抽奖页面标题
    flush_title(title_info.title, title_info.logo)
    
    // employees_list = [{id: "001", name: "zhangsan", phone:"xxx", avatar: "xxxx"}]
    const local_employees_list = JSON.parse(localStorage.getItem("employees_list"))
    console.log(local_employees_list);
    // (逻辑)更新全局员工信息列表设置
    employees_list = local_employees_list;
    // (页面)更新设置页面员工列表
    flush_employee_list(employees_list)
    // TODO:(页面)更新转盘区域候选员工区域
    
    // prize_list = [{id:"001", name: "", price: "", count: "", detail: "", img_url: ""}]
    const local_prize_list = JSON.parse(localStorage.getItem("prize_list"));
    console.log(local_prize_list);
    prize_list = local_prize_list;
    flush_prize_list(prize_list);
    // (页面)更新奖品列表
    
    // avalid_employee_list = [{id: "001", name: "zhangsan", phone:"xxx", avatar: "xxxx"}]
    const local_avalid_employee_list = JSON.parse(localStorage.getItem("avalid_employee_list"))
    console.log(local_avalid_employee_list);
    avalid_employee_list = local_avalid_employee_list;
    // (页面)更新转盘抽奖成员
    
    // winner_list = [{id: "001", employee_id: "001", prize_id: "001", avalied: "true" }]
    const local_winner_list = JSON.parse(localStorage.getItem("winner_list"))
    console.log(local_winner_list);
    winner_list = local_winner_list;
    flush_winner_list(winner_list);
        // (页面)更新抽奖页面中奖列表
        // (页面)更新转盘区域信息(抽奖按钮状态和奖品信息)
        // (逻辑)更新全局未中奖员工信息列表设置
}

/** 刷新标题和logo */
const flush_title = (title, logo_url) => {
    document.getElementById("title-content1").innerHTML = title;
    document.getElementById("title-content2").innerHTML = title;
    document.getElementById("com-logo-content").src = logo_url;
}

/** 更新标题和logo */
const save_title = () => {
    const new_title = document.getElementById("title_input").value;
    const new_logo = document.getElementById("logo_input").value
    // 更新全局信息
    title_info = { title: new_title, logo: new_logo };
    // 更新localStorage
    localStorage.setItem("title_info", JSON.stringify(title_info));
    // 刷新所有地方
    flush_title(new_title, new_logo);
}

/** 刷新员工信息列表 */
const flush_employee_list = (employees_list) => {
    let tbody = "";
    employees_list.forEach(employee => {
        tbody +=
            "<tr id='" + employee.id + "'>" +
                "<td>" + employee.avatar + "</td>" +
                "<td>" + employee.name + "</td>" +
                "<td>" + employee.id + "</td>" +
                "<td>" + employee.phone + "</td>" +
                "<td><button id='btn' style='width: 100%' onclick='del_employee(" + employee.id + ")'>作废</button></td>" +
            "</tr>"
    });
    document.getElementById("employees-tbody").innerHTML = tbody;
}

/** 刷新奖品信息列表 */
const flush_prize_list = (prize_list) => {
    let tbody = "";
    prize_list.forEach(prize => {
        tbody +=
            "<tr id='"+prize.id+"'>" +
                "<td>" + prize.name + "</td>" +
                "<td><img alt='' title='' src='" + prize.img_url + "' /></td>" +
                "<td>" + prize.count + "</td>" +
                "<td>" + prize.prise + "</td>" +
                "<td>" + prize.level + "</td>" +
                "<td>" + prize.detail + "</td>" +
                "<td><button id='btn' style='width: 100%' onclick='del_prize(" + prize.id + ")'>下架</button></td>" +
            "</tr>"
    });
    document.getElementById("prizes-tbody").innerHTML = tbody;
}


/** 添加员工信息 */
const add_employee = () => {
    const new_emlye_id = document.getElementById("emlye_id_input").value;
    const new_emlye_name = document.getElementById("emlye_name_input").value;
    const new_emlye_phone = document.getElementById("emlye_phone_input").value;
    const new_emlye_avatar = document.getElementById("emlye_avatar_input").value;
    // 更新全局信息
    employees_list.push({
        id: new_emlye_id,
        name: new_emlye_name,
        phone: new_emlye_phone,
        avatar: new_emlye_avatar,
    });
    // 将新员工的信息添加到可抽奖员工列表
    avalid_employee_list.push({
        id: new_emlye_id,
        name: new_emlye_name,
        phone: new_emlye_phone,
        avatar: new_emlye_avatar,
    });
    // 更新本地缓存员工信息
    localStorage.setItem("employees_list", JSON.stringify(employees_list));
    // 更新本地缓存可抽奖员工信息
    localStorage.setItem("avalid_employee_list", JSON.stringify(avalid_employee_list));
    // 刷新员工列表
    flush_employee_list(employees_list);
}

/** 删除员工信息 */
const del_employee = (del_emlye_id) => {
    // 创建临时存储的新员工数组
    const new_emplye_list = []
    employees_list.map(employee => {
        employee.emlye_id !== del_emlye_id
            &&
            new_emplye_list.push(employee);
    })
    // 然后将临时数组写回全局数组
    employees_list = new_emplye_list

    // 更新可抽奖员工名单信息
    // 创建临时存储的新员工数组
    const new_avalied_emplye_list = []
    avalid_employee_list.map(employee => {
        employee.emlye_id !== del_emlye_id
            &&
            new_avalied_emplye_list.push(employee);
    })
    // 然后将临时数组写回全局数组
    avalid_employee_list = new_avalied_emplye_list

    // 如果有获奖记录则需要删除获奖记录并恢复奖品数量
    const new_winner_list = [];
    winner_list.map(winner => {
        // 如果获奖列表存在，则根据获奖列表获取对应的奖品信息，将奖品数量复原
        if (winner.employee_id === del_emlye_id) {
            prize_list.map(prize => prize.id === winner.prize_id ? prize.count++ : void 0);
        // 如果没有被删除就保存获奖记录
        } else {
            new_winner_list.push(winner)
        }
    })
    // 更新全局的获奖记录
    winner_list = new_winner_list
    // 全局奖品数量已经更新
    
    // 更新本地缓存员工信息
    localStorage.setItem("employees_list", JSON.stringify(employees_list));
    // 更新本地缓存可抽奖员工信息
    localStorage.setItem("avalid_employee_list", JSON.stringify(avalid_employee_list));
    // 更新本地缓存获奖信息
    localStorage.setItem("winner_list", JSON.stringify(winner_list));
    // 更新本地缓存奖品信息
    localStorage.setItem("prize_list", JSON.stringify(prize_list));
    // 刷新员工列表
    flush_employee_list(employees_list);
    // TODO:需要刷新转盘数据
    // 需要刷新奖品信息
    flush_prize_list(prize_list);
}

/** 新增奖品信息 */
const add_prize = () => {
    // TODO: 获取最大奖品ID的方法
    const new_prize_id = "最大奖品" + 1;
    const new_prize_name = document.getElementById("prize_name_input").value;
    const new_prize_img_url = document.getElementById("prize_img_url_input").value;
    const new_prize_count = document.getElementById("prize_count_input").value;
    const new_prize_level = document.getElementById("prize_level_input").value;
    const new_prize_prise = document.getElementById("prize_prise_input").value;
    const new_prize_detail = document.getElementById("prize_detail_input").value;

    // 更新全局奖品列表信息
    prize_list.push({
        id: new_prize_id,
        name: new_prize_name,
        img_url: new_prize_img_url,
        count: new_prize_count,
        prise: new_prize_prise,
        level: new_prize_level,
        detail: new_prize_detail
    })

    // 更新本地缓存的奖品信息
    localStorage.setItem("prize_list", JSON.stringify(prize_list));

    // 刷新奖品列表
    flush_prize_list(prize_list);

}

/** 下架奖品 */
const del_prize = (del_prize_id) => {
    // 创建临时存储的新员工数组
    const new_prize_list = []
    prize_list.map(prize => {
        prize.emlye_id !== del_prize_id
            &&
            new_prize_list.push(prize);
    })
    // 然后将临时数组写回全局数组
    prize_list = new_prize_list

    // 更新可抽奖员工名单信息
    // 创建临时存储的新员工数组
    const new_avalied_emplye_list = []
    avalid_employee_list.map(employee => {
        employee.emlye_id !== del_emlye_id
            &&
            new_avalied_emplye_list.push(employee);
    })
    // 然后将临时数组写回全局数组
    avalid_employee_list = new_avalied_emplye_list

    // 如果有获奖记录则需要删除获奖记录并恢复员工抽取权限
    const new_winner_list = [];
    winner_list.map(winner => {
        // 如果获奖列表存在，则根据获奖列表获取对应的奖品信息，将奖品数量复原
        if (winner.prize_id === del_prize_id) {
            employees_list.map(employee => employee.id === winner.emlye_id ? avalid_employee_list.push(employee): void 0);
        // 如果没有被删除就保存获奖记录
        } else {
            new_winner_list.push(winner)
        }
    })
    // 更新全局的获奖记录
    winner_list = new_winner_list;
    // 全局奖品信息
    prize_list = new_prize_list;
    // 更新本地缓存可抽奖员工信息
    localStorage.setItem("avalid_employee_list", JSON.stringify(avalid_employee_list));
    // 更新本地缓存获奖信息
    localStorage.setItem("winner_list", JSON.stringify(winner_list));
    // 更新本地缓存奖品信息
    localStorage.setItem("prize_list", JSON.stringify(prize_list));
    // TODO:需要刷新转盘旁边的数据
    // 需要刷新奖品信息
    flush_prize_list(prize_list);
}

const flush_winner_list = (winner_list) => {
    let tbody = "";
    winner_list.forEach(winner => {
        employee = employees_list.find(employee => employee.id === winner.employee_id)
        prize = prize_list.find(prize => prize.id === winner.prize_id)
        tbody +=
            "<tr id='"+winner.id+"'>" +
                "<td><img alt='' title='' src='" + employee.avatar + "' /></td>" +
                "<td>" + employee.name + "</td>" +
                "<td>" + employee.id + "</td>" +
                "<td>" + employee.phone + "</td>" +
                "<td>" + prize.name + "</td>" +
                "<td>" + prize.level + "</td>" +
                "<td>" + winner.win_time + "</td>" +
                "<td>" + winner.avalied + "</td>" +
                "<td><button id='btn' style='width: 100%'>下架</button></td>" +
            "</tr>"
    });
    document.getElementById("winners-tbody").innerHTML = tbody;
}

const add_winner = (prize_id, employee_id) => {
    // TODO: 获取最大获奖记录ID的方法
    const new_winner_id = "最大奖品" + 1;

    employee = employees_list.find(employee => employee.id === winner.employee_id);
    prize = prize_list.find(prize => prize.id === winner.prize_id);
    // 更新全局获奖列表信息
    winner_list.push({
        id: new_prize_id,
        employee_id: employee_id,
        prize_id: prize_id,
        valied: true
    })

    // 更新奖品数量
    prize_list.map(prize => prize.count--);

    // 更新可抽奖员工名单信息
    // 创建临时存储的新员工数组
    const new_avalied_emplye_list = []
    avalid_employee_list.map(employee => {
        employee.emlye_id !== employee_id
            &&
            new_avalied_emplye_list.push(employee);
    })
    // 然后将临时数组写回全局数组
    avalid_employee_list = new_avalied_emplye_list


    // 更新本地缓存的可抽奖员工列表信息
    localStorage.setItem("avalid_employee_list", JSON.stringify(avalid_employee_list));
    // 更新本地缓存获奖信息
    localStorage.setItem("winner_list", JSON.stringify(winner_list));
    // 更新本地缓存奖品信息
    localStorage.setItem("prize_list", JSON.stringify(prize_list));

    // 刷新奖品列表
    flush_prize_list(prize_list);
    // TODO:需要刷新转盘旁边的数据
    // 

}

const del_winner = (winner_id) => {
    // TODO: 获取最大获奖记录ID的方法
    const new_winner_id = "最大奖品" + 1;

    employee = employees_list.find(employee => employee.id === winner.employee_id);
    prize = prize_list.find(prize => prize.id === winner.prize_id);
    // 更新全局获奖列表信息
    winner_list.push({
        id: new_prize_id,
        employee_id: employee_id,
        prize_id: prize_id,
        valied: true
    })

    // 更新奖品数量
    prize_list.map(prize => prize.count--);

    // 更新可抽奖员工名单信息
    // 创建临时存储的新员工数组
    const new_avalied_emplye_list = []
    avalid_employee_list.map(employee => {
        employee.emlye_id !== employee_id
            &&
            new_avalied_emplye_list.push(employee);
    })
    // 然后将临时数组写回全局数组
    avalid_employee_list = new_avalied_emplye_list


    // 更新本地缓存的可抽奖员工列表信息
    localStorage.setItem("avalid_employee_list", JSON.stringify(avalid_employee_list));
    // 更新本地缓存获奖信息
    localStorage.setItem("winner_list", JSON.stringify(winner_list));
    // 更新本地缓存奖品信息
    localStorage.setItem("prize_list", JSON.stringify(prize_list));

    // 刷新奖品列表
    flush_prize_list(prize_list);
    // TODO:需要刷新转盘旁边的数据

    // 需要刷新中奖列表
    flush_winner_list(winner_list)

}

const reset_title_input = () => {
    document.getElementById("title_input").value = "";
    document.getElementById("logo_input").value = "";
}

const reset_employee_input = () => {
    document.getElementById("emlye_name_input").value = "";
    document.getElementById("emlye_avatar_input").value = "";
    document.getElementById("emlye_phone_input").value = "";
    document.getElementById("emlye_number_input").value = "";
}

const reset_prize_input = () => {
    document.getElementById("prize_name_input").value = "";
    document.getElementById("prize_img_url_input").value = "";
    document.getElementById("prize_count_input").value = "";
    document.getElementById("prize_level_input").value = "";
    document.getElementById("prize_prise_input").value = "";
    document.getElementById("prize_detail_input").value = "";
}

const reset_zhuanpan_input = () => {
    alert("you click me!")
    // document.getElementById("title_input").value = "";
    // document.getElementById("logo_input").value = "";
}


reload_data();