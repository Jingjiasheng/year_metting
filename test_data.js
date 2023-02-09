const save_to_local = () => {
    // 标题信息
    const title_info = {title: "XX科技年度晚会抽奖", logo: "https://avatars.githubusercontent.com/u/65474840?v=4"}
    // 员工信息列表
    const employees_list = [
        {id: "001", name: "廖xx", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "002", name: "井xx", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "003", name: "鲍xx", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "004", name: "牛XX", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "005", name: "李XX", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "006", name: "毕X", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "007", name: "刘X", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
    ]
    // 可以抽奖的员工列表
    const avalid_employee_list = [
        {id: "001", name: "廖xx", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "002", name: "井xx", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "003", name: "鲍xx", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "004", name: "牛XX", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "005", name: "李XX", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
        {id: "006", name: "毕X", phone: "1507159xxxx", avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.duitang.com%2Fcategory%2F%3Fcat%3Davatar&psig=AOvVaw3kwabeLeOBwLEn_992CKQ4&ust=1673599736776000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiqk4DTwfwCFQAAAAAdAAAAABAEhttps://c-ssl.dtstatic.com/uploads/blog/202208/01/20220801091938_9f3d5.thumb.300_0.jpeg"},
    ]
    // 奖品信息列表
    const prize_list = [
        {id: "001", name: "sony-ps5", prise: "599￥",level: "特等奖", count: "1", img_url: "https://img.alicdn.com/bao/uploaded/i2/2211473356883/O1CN01C6JlvO20iSvVFQGAC_!!2211473356883.jpg_120x120.jpg", detail: "xxxxxx"},
        {id: "002", name: "switch", prise: "699￥",level: "一等奖", count: "1", img_url: "https://img.alicdn.com/bao/uploaded/i2/2211473356883/O1CN01C6JlvO20iSvVFQGAC_!!2211473356883.jpg_120x120.jpg", detail: "xxxxxx"},
        {id: "003", name: "洗碗机", prise: "588￥",level: "一等奖", count: "2", img_url: "https://img.alicdn.com/bao/uploaded/i2/2211473356883/O1CN01C6JlvO20iSvVFQGAC_!!2211473356883.jpg_120x120.jpg", detail: "xxxxxx"},
        {id: "004", name: "小米手环", prise: "100￥",level: "二等奖", count: "2", img_url: "https://img.alicdn.com/bao/uploaded/i2/2211473356883/O1CN01C6JlvO20iSvVFQGAC_!!2211473356883.jpg_120x120.jpg", detail: "xxxxxx"},
        {id: "005", name: "洗发水", prise: "100￥",level: "三等奖", count: "3", img_url: "https://img.alicdn.com/bao/uploaded/i2/2211473356883/O1CN01C6JlvO20iSvVFQGAC_!!2211473356883.jpg_120x120.jpg", detail: "xxxxxx"},
        {id: "006", name: "一次性手套", prise: "99￥",level: "三等奖", count: "3", img_url: "https://img.alicdn.com/bao/uploaded/i2/2211473356883/O1CN01C6JlvO20iSvVFQGAC_!!2211473356883.jpg_120x120.jpg", detail: "xxxxxx"},
    ]
    // 获奖信息列表
    const winner_list = [
        {id: "001", employee_id: "007", prize_id: "006", win_time: "2023-01-12T09:30:18.399Z", avalied: true},
    ]

    localStorage.setItem("title_info", JSON.stringify(title_info));
    localStorage.setItem("employees_list", JSON.stringify(employees_list));
    localStorage.setItem("avalid_employee_list", JSON.stringify(avalid_employee_list));
    localStorage.setItem("prize_list", JSON.stringify(prize_list));
    localStorage.setItem("winner_list", JSON.stringify(winner_list));

}
save_to_local();
