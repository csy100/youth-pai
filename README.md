# 项目启动

```
pnpm install
pnpm dev --host 0.0.0.0
```

# docker启动

## 构建镜像
```bash
docker build -t youth-pai-dev .
```

## 运行容器
```bash
docker run -d -p 80:80 --name youth-pai-app-dev youth-pai-dev
```

## 查看日志
```bash
docker logs -f youth-pai-app
```

## 停止容器
```bash
docker stop youth-pai-app
```

## 删除容器
```bash
docker rm youth-pai-app
```

## 进入容器内部（可选）
```bash
docker exec -it youth-pai-app /bin/sh
```

---

如需修改端口或其他参数，请根据实际需求调整命令。
