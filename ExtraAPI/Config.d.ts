declare abstract class Config {
    /**
     * 创建配置文件
     * @param path 文件路径
     * @param data 文件数据
     */
    static newConfig(path: string, data?: string): Config

    /**
     * 获取键值
     * @param key 键名
     */
    get<T = any>(key: string): T

    // /**
    //  * 切换 Config
    //  * @param key 键名
    //  * @description 这个函数用来切换 配置文件 本质是创建新的配置玩家 方便修改配置文件内容中的内容
    //  */
    // set(key: string): Config

    /**
     * 设置键值对
     * @param key 键名
     * @param value 键值
     */
    set<T = any>(key: string, value: T): void

    /**
     * 键是否有对应键值
     * @param key 键名
     */
    has(key: string): boolean

    /**
     * 初始化键值对
     * @param key 键名
     * @param value 键值
     */
    init<T>(key: string, value: T): T

    /**
     * 删除键值对
     * @param key 键名
     */
    del(key: string): void

    /**
     * 重载配置文件
     */
    reload(): void

    /**
     * 获取配置文件版本
     */
    getVersion(): number
}
